// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://siga.marcacaodeatendimento.pt/Marcacao/MarcacaoInicio');


  // click a button that has attribute onclick="location.href='Entidades'"
  await page.click('input[onclick="location.href=\'Entidades\'"]');

  // click in the button title attribute IRN Registo
  await page.click('button[title="IRN Registo"]');

  // click on the first option of the select input
  await page.selectOption('select[name="IdCategoria"]', "22002");

  // click on the first option of the select input
  await page.selectOption('select[name="IdSubcategoria"]', "30825");

  // click in the button that has the text "Próximo"
  await page.click('a:has-text("Next")');

  // click on the first option of the select input
  await page.selectOption('select[name="IdDistrito"]', "11");

  // click on the first option of the select input
  await page.selectOption('select[name="IdLocalidade"]', "-1");

  // click in the button that has the text "Next"
  await page.click('a:has-text("Next")');

  // verify if the text is present in the page "There are no appointment schedules available for the selected criteria."
  expect(await page.textContent('body')).toContain('There are no appointment shedules available for the selected criteria.');
});
