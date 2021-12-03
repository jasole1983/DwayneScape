export class NewCard {
    constructor(idx, did, q="", an=""){
      this.index = idx
      this.question = q
      this.answer = an
      this.deckId = did
      this.reg = this.getReg()
    }

    getReg(){
      return `C${this.DID}-${this.index}`
    }

    toObj(idx, did, q="", an=""){
      const myReg = this.reg
      return {myReg : {'index': idx, 'question': q, 'answer': an, 'deckId': did} }
    }
  }