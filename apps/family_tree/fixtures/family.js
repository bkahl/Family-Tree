// ==========================================================================
// Project:   FamilyTree.Family Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals FamilyTree */

sc_require('models/family');

FamilyTree.Family.FIXTURES = [

  { guid: 1,
    name: "Perry",
    members: [5,6]},
  
  { guid: 2,
    name: "Kahl",
    members: [7,8,9,10]},
  
  { guid: 3,
    name: "Deck",
    members: [1,2,3,4]},
  
  { guid: 4,
    name: "Dooley",
    members: [11]}

];

for ( var i = 5; i < 100; i++) {
  FamilyTree.Family.FIXTURES.push( { guid: i, name: 'smith' + i, members: [] } );
}