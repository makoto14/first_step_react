const addTodoNames = ["hoge", "こんにちは", "hello"];
const deletedTodoNames = [addTodoNames[0], addTodoNames[2]];

const addTodo = (todoName: string) => {
  cy.get("#todo-title").type(todoName);
  cy.get("#add-todo").click();
};

describe("2_useStte", () => {
  it("add TODO", () => {
    cy.visit("http://localhost:8081/usestate");

    for (const todo of addTodoNames) {
      addTodo(todo);
    }

    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        cy.wrap($li)
          .find(
            ".MuiListItemButton-root > .MuiListItemText-root > .MuiTypography-root"
          )
          .should("have.text", addTodoNames[index]);
      });
  });

  it("toggle TODO", () => {
    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        if (index === 1) {
          cy.wrap($li).click();
        }
      });

    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        cy.wrap($li)
          .find(
            ".MuiListItemButton-root > .MuiListItemIcon-root > .MuiCheckbox-root > .PrivateSwitchBase-input"
          )
          .should(index !== 1 ? "not.be.checked" : "be.checked");
      });

    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        if (index === 1) {
          cy.wrap($li).click();
        }
      });

    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        cy.wrap($li)
          .find(
            ".MuiListItemButton-root > .MuiListItemIcon-root > .MuiCheckbox-root > .PrivateSwitchBase-input"
          )
          .should("not.be.checked");
      });
  });

  it("delete TODO", () => {
    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        if (index === 1) {
          cy.wrap($li)
            .find(
              `.MuiListItemSecondaryAction-root > .MuiButtonBase-root > [data-testid="DeleteIcon"]`
            )
            .click();
        }
      });

    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        cy.wrap($li)
          .find(
            ".MuiListItemButton-root > .MuiListItemText-root > .MuiTypography-root"
          )
          .should("have.text", deletedTodoNames[index]);
      });

    const list = [...deletedTodoNames, "Hello world"];
    addTodo(list[2]);

    cy.get("#todo-list")
      .children()
      .each(($li, index, $list) => {
        cy.wrap($li)
          .find(
            ".MuiListItemButton-root > .MuiListItemText-root > .MuiTypography-root"
          )
          .should("have.text", list[index]);
      });
  });
});
