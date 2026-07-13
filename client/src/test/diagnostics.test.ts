/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from 'vscode'
import * as assert from 'assert'
import { getDocUri, activate } from './helper'

describe('Should get diagnostics', () => {
  const docUri = getDocUri('test1.vm')

  it('Parses the file correctly', async () => {
    await testDiagnostics(docUri, [
    ])
  })
})

describe('Should get specialized linter diagnostics', () => {
  const docUri = getDocUri('test2.vm')

  before(async () => {
    await activate(docUri)
  })

  it('Reports all expected diagnostics', () => {
    const actualDiagnostics = vscode.languages.getDiagnostics(docUri)
    assert.equal(actualDiagnostics.length, 10)
  })

  it("Detects missing escape before '$'", () => {
    assertHasDiagnostic(docUri, "Possible escape missing before '$'.", toRange(1, 10, 1, 11))
  })

  it("Detects ambiguous expression before '.$'", () => {
    assertHasDiagnostic(docUri, "Possible ambiguous expression before '.$', try using '${expression}'.", toRange(2, 4, 2, 6))
  })

  it("Detects missing escape before '#' inside an expression", () => {
    assertHasDiagnostic(docUri, "Possible escape missing before '#'.", toRange(3, 4, 3, 5))
  })

  it("Detects missing $ before isolated identifier 'null'", () => {
    assertHasDiagnostic(docUri, "Possible $ missing before identifier 'null'.", toRange(4, 10, 4, 14))
  })

  it("Detects missing $ before identifier 'null' right after '('", () => {
    assertHasDiagnostic(docUri, "Possible $ missing before identifier 'null'.", toRange(5, 4, 5, 8))
  })

  it('Detects ambiguous parenthesis after a reference', () => {
    assertHasDiagnostic(docUri, "Possible ambiguous expression, try using '${expression}' to clarify.", toRange(6, 0, 6, 4))
  })

  it('Detects variable declared with a reserved keyword', () => {
    assertHasDiagnostic(docUri, "Variable declared with reserved keyword 'end'.", toRange(7, 6, 7, 9), vscode.DiagnosticSeverity.Warning)
  })

  it("Detects missing escape before '#' at the lexer level", () => {
    assertHasDiagnostic(docUri, "Possible escape missing before '#'.", toRange(8, 6, 8, 7))
  })

  it('Detects #define block without a closing #end', () => {
    assertHasDiagnostic(docUri, 'Could not find corresponding #end block closing statement.', toRange(9, 0, 9, 7))
  })
})

function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
  const start = new vscode.Position(sLine, sChar)
  const end = new vscode.Position(eLine, eChar)
  return new vscode.Range(start, end)
}

function assertHasDiagnostic(docUri: vscode.Uri, message: string, range: vscode.Range, severity: vscode.DiagnosticSeverity = vscode.DiagnosticSeverity.Error) {
  const actualDiagnostics = vscode.languages.getDiagnostics(docUri)
  const found = actualDiagnostics.find(d => d.message === message && d.range.isEqual(range))
  assert.ok(found, `Expected diagnostic "${message}" at ${range.start.line}:${range.start.character} but got: ` +
    actualDiagnostics.map(d => `"${d.message}" at ${d.range.start.line}:${d.range.start.character}`).join(', '))
  assert.equal(found.severity, severity)
}

async function testDiagnostics(docUri: vscode.Uri, expectedDiagnostics: vscode.Diagnostic[]) {
  await activate(docUri)

  const actualDiagnostics = vscode.languages.getDiagnostics(docUri);

  assert.equal(actualDiagnostics.length, expectedDiagnostics.length);

  expectedDiagnostics.forEach((expectedDiagnostic, i) => {
    const actualDiagnostic = actualDiagnostics[i]
    assert.equal(actualDiagnostic.message, expectedDiagnostic.message)
    assert.deepEqual(actualDiagnostic.range, expectedDiagnostic.range)
    assert.equal(actualDiagnostic.severity, expectedDiagnostic.severity)
  })
}