// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA" 

function DNAStrand(dna){
  return dna.replace(/A/g, "x").replace(/T/g, "A").replace(/x/g, "T").replace(/C/g, "x").replace(/G/g, "C").replace(/x/g, "G");
}
DNAStrand ("ATTGCCGCCCCATTTTAACCGGG");