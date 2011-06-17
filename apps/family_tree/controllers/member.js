// ==========================================================================
// Project:   FamilyTree.memberController
// Copyright: ©2011 My Company, Inc.
// Authors: Brad Kahl, Andrew Deck
// ==========================================================================
/*globals FamilyTree */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
FamilyTree.memberController = SC.ObjectController.create(
/** @scope FamilyTree.memberController.prototype */ {

  contentBinding: SC.Binding.single('FamilyTree.membersController.selection')
}) ;
