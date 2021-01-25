/*
 * Copyright 2018-2021 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
describe('SubmitButton', () => {
  it('opens jupyterlab', () => {
    cy.openJupyterLab();
  });

  it('opens blank notebook', () => {
    cy.get(
      '.jp-LauncherCard[data-category="Notebook"][title="Python 3"]:visible'
    ).click();
  });

  it('presses the submit notebook buttton', () => {
    cy.contains('Submit Notebook').click();
  });

  it('shows a dialog after pressing submit notebook', () => {
    cy.get('.jp-Dialog');
  });
});
