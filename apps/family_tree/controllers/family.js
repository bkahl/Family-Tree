// ==========================================================================
// Project:   FamilyTree.familyController
// Copyright: ©2011 My Company, Inc.
// Authors: Brad Kahl, Andrew Deck
// ==========================================================================
/*globals FamilyTree */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
FamilyTree.familyController = SC.ObjectController.create(
/** @scope FamilyTree.familyController.prototype */ {

  contentBinding: SC.Binding.single('FamilyTree.familiesController.selection')
}) ;
