// ==========================================================================
// Project:   FamilyTree.Person
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals FamilyTree */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
FamilyTree.Person = SC.Record.extend(
/** @scope FamilyTree.Person.prototype */ {

  primaryKey: 'guid',
  
  firstName: SC.Record.attr(String, {
    isRequired: YES
  }),
  
  lastName: SC.Record.attr(String, {
    isRequired: NO
  }),
  
  cleanLastName: function (key,val) {
  var lastName;
  if (val) {
    this.set('lastName', val);
    lastName = val;
  } else {
    lastName = this.get('lastName') || this.getPath('family.name');
  }
  return lastName;
  }.property('lastName').cacheable(),

  fullName: function () {
    var lastName = this.cleanLastName();
    return [ this.get('firstName'),lastName ].join(' ');
  }.property('firstName','lastName').cacheable(),
  
  spouse: SC.Record.toOne('FamilyTree.Person'),
  
  family: SC.Record.toOne('FamilyTree.Family', {
    inverse: 'members',
    isMaster: NO
  }),
  
  children: SC.Record.toMany('FamilyTree.Person', {
    inverse: 'parents',
    isMaster: YES
  }),
  
  parents: SC.Record.toMany('FamilyTree.Person', {
    inverse: 'children',
    isMaster: NO
  }),
  
  relatives: function () {
    var ary = [],
        spouse = this.get('spouse'),
        children = this.get('children'),
        parents = this.get('parents');
    ary.pushObject(spouse);
    ary.pushObjects(children);
    ary.pushObjects(parents);
    
    return ary;
  }.property('spouse','children','parents').cacheable()

}) ;
