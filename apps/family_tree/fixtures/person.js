// ==========================================================================
// Project:   FamilyTree.Person Fixtures
// Copyright: ©2011 My Company, Inc.
// Authors: Brad Kahl, Andrew Deck
// ==========================================================================
/*globals FamilyTree */

sc_require('models/person');

FamilyTree.Person.FIXTURES = [

  { guid: 1,
    firstName: "Andrew",
    lastName: "Deck",
    family: [1],
    spouse: [2],
    children: [],
    parents: [3,4] },

  { guid: 2,
    firstName: "Caroline",
    lastName: "Deck",
    family: [3],
    spouse: [1],
    children: [],
    parents: [5,6] },
  
  { guid: 3,
    firstName: "Joe",
    lastName: "Deck",
    family: [3],
    spouse: [4],
    children: [1],
    parents: [] },
  
  { guid: 4,
    firstName: "Lisa",
    lastName: "Deck",
    family: [1],
    spouse: [3],
    children: [1],
    parents: [] },
  
  { guid: 5,
    firstName: "Jane",
    lastName: "Perry",
    family: [1],
    spouse: [6],
    children: [2],
    parents: [] },
  
  { guid: 6,
    firstName: "Thomas",
    lastName: "Perry",
    family: [1],
    spouse: [5],
    children: [2],
    parents: [] },
  
  { guid: 7,
    firstName: "Brad",
    lastName: "Kahl",
    family: [2],
    spouse: [8],
    children: [],
    parents: [9,10] },
  
  { guid: 8,
    firstName: "Kinsey",
    lastName: "Kahl",
    family: [2],
    spouse: [7],
    children: [],
    parents: [] },

  { guid: 9,
    firstName: "Robin",
    lastName: "Kahl",
    family: [2],
    spouse: [10],
    children: [7],
    parents: [] },
    
  { guid: 10,
    firstName: "Rick",
    lastName: "Kahl",
    family: [2], 
    spouse: [9],
    children: [7],
    parents: [] },
  
  { guid: 11,
    firstName: "Jason",
    lastName: "Dooley",
    family: [4], 
    spouse: [],
    children: [],
    parents: [] }

];
