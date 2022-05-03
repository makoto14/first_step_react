describe("2_useStte", () => {
  it("add TODO", () => {
    cy.visit("http://localhost:8081/usestate");

    cy.get("#todo-title").type("hoge");
    cy.get("#add-todo").click();
    // cy.get(".todo-list-contents").should("have.text", "hoge");

    cy.get("#todo-title").type("こんにちは");
    cy.get("#add-todo").click();
    // cy.get(".todo-list-contents").should("have.text", "こんにちは");
    cy.get(
      ":nth-child(1) > .MuiListItemButton-root > .MuiListItemText-root > .MuiTypography-root"
    ).should("have.text", "hoge");
    cy.get(
      ":nth-child(2) > .MuiListItemButton-root > .MuiListItemText-root > .MuiTypography-root"
    ).should("have.text", "こんにちは");
  });
});
