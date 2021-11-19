const chai = window.chai
const expect = chai.expect

describe('Wheel-of-Doom-g5', () => {
  it('puedo elegir candidatas aleatoriamente y las quito de la lista', () => {

    let coders = ["Sandra", "Valentina", "Laura", "Rosa", "Tamara", "Judith", "Helen", "Carmen", "Candy", "Gabrielle", "Yulilla", "Anna G",
    "Sonia", "Desirée", "Alisa", "Faby",
    "Ana C", "Joana", "Gracia", "Alexia", "Marisa", "Laura M", "Rosa", "Kristina"];

    let position = 6;

    let coder = seleccionarCoder(coders, position);

    expect(coder).to.equal("Helen")
    expect(coders).to.have.same.members(["Sandra", "Valentina", "Laura", "Rosa", "Tamara", "Judith", "Carmen", "Candy", "Gabrielle", "Yulilla", "Anna G",
    "Sonia", "Desirée", "Alisa", "Faby",
    "Ana C", "Joana", "Gracia", "Alexia", "Marisa", "Laura M", "Rosa", "Kristina"])
  })
})