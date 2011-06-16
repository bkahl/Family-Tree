// ==========================================================================
// Project:   FamilyTree - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals FamilyTree */

// This page describes the main user interface for your application.  
FamilyTree.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    layout: { minHeight: 400 , minWidth: 1000},
    childViews: 'personView membersView familyView'.w(),
    
    familyView: SC.View.design({
      layout: { top: 0, left: 0, width: 400, bottom: 0 },
      childViews: 'familyListView familyLabelView'.w(),
      
      familyListView: SC.ScrollView.design({
        layout: { top: 36, left: 0, right: 0, bottom: 0 },
        childViews: 'contentView'.w(),
        
        contentView: SC.ListView.design({
          layout: { top: 0, left: 0, right: 0, bottom: 0 },
          backgroundColor: 'rgba(0,0,255,0.5)',
          contentBinding: 'FamilyTree.familiesController.arrangedObjects',
          selectionBinding: 'FamilyTree.familiesController.selection',
          contentValueKey: 'name',
          rowHeight: 21
        })
      }),
      
      familyLabelView: SC.ToolbarView.design({
        layout: { top: 0, left: 0, right: 0, height: 36 },
        anchorLocation: SC.ANCHOR_TOP,
        childViews: 'labelView'.w(),
        
        labelView: SC.LabelView.design({
          layout: { centerX: 0, centerY: 0, height: 24, width: 60 },
          fontWeight: SC.BOLD_WEIGHT,
          value: 'Families'
        })        
      })
    
    }),
    
    membersView: SC.View.design({
      layout: { top: 0, right: 0, left: 400, height: 0.5 },
      childViews: 'memberListView memberLabelView'.w(),
      
      memberLabelView: SC.ToolbarView.design({
        layout: { top: 0, right: 0, left: 0, height: 36 },
        anchorLocation: SC.ANCHOR_TOP,
        childViews: "labelView".w(),
        
        labelView: SC.LabelView.design({
          layout: { centerX: 0, centerY: 0, height: 24, width: 60 },
          fontWeight: SC.BOLD_WEIGHT,
          value: 'Members'
        })
      }),
      
      memberListView: SC.ScrollView.design({
        layout: { top: 36, left: 0, right: 0, bottom: 0 },
        backgroundColor: 'rgba(0,255,0,0.5)',
        childViews: 'contentView'.w(),
        
        contentView: SC.ListView.design({
          layout: { top: 0, left: 0, right: 0, bottom: 0 },
          backgroundColor: 'rgba(0,255,0,0)',
          isVisibleBinding: SC.Binding.single('FamilyTree.familiesController.selection').oneWay().bool(),

          contentBinding: 'FamilyTree.familyController.members',
          selectionBinding: 'FamilyTree.membersController.selection',
          contentValueKey: 'firstName'
        })
      })
      
    }),
    
    personView: SC.View.design({
      layout: { height: 0.5, right: 0, left: 400, bottom: 0 },
      childViews: 'infoView relativesView'.w(),
      
      infoView: SC.View.design({
        layout: { left: 0, top: 0, bottom: 0, right: 400 },
        backgroundColor: 'rgba(255,0,255,0.5)',
        childViews: 'nameAreaView'.w(),
        
        nameAreaView: SC.View.design({
          layout: {top: 0, left: 0, right: 0, bottom: 0},
          childViews: 'nameView'.w(),
          
          nameView: SC.TextFieldView.design({
            layout: { centerX: 0, centerY: 0, height: 24, width: 200 },
            contentBinding: 'FamilyTree.memberController',
            contentValueKey: 'fullName'
          
          })
        })
      }),
      
      relativesView: SC.View.design({
        layout: { width: 400, top: 0, right: 0, bottom: 0 },
        childViews: 'relativesLabelView relativesListView'.w(),
        
        relativesLabelView: SC.ToolbarView.design({
          layout: { top: 0, left: 0, right: 0, height: 36 },
          anchorLocation: SC.ANCHOR_TOP,
          childViews: 'labelView'.w(),
          
          labelView: SC.LabelView.design({
            layout: { centerX: 0, centerY: 0, height: 24, width: 60 },
            fontWeight: SC.BOLD_WEIGHT,
            value: 'Relatives'
          })
          
        }),
        
        relativesListView: SC.ScrollView.design({
          layout: { top: 36, left: 0, right: 0, bottom: 0 },
          childViews: 'contentView'.w(),
          backgroundColor: 'rgba(255,0,0,0.5)',
          
          
          contentView: SC.ListView.design({
            isVisibleBinding: SC.Binding.single('FamilyTree.membersController.selection').oneWay().bool(),
            backgroundColor: 'rgba(255,0,0,0)',
            contentBinding: 'FamilyTree.memberController.relatives',
            contentValueKey: 'fullName',
            selectionBinding: 'FamilyTree.membersController.selection'
            
          })
          
        })
      })
      
    })
    
  })

});
