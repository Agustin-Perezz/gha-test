describe('test', () => {
    it('test inside', () => {
        cy.visit('/');
        cy.contains('GitHub Actions');
    });
});
