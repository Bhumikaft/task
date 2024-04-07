// Copyright (c) 2024, bhumika and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Customer Details", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Customer Details', {
    refresh: function(frm) {
        frm.add_custom_button(__('Add Customer Details'), function() {
            frappe.prompt([
                {'fieldname': 'email', 'fieldtype': 'Data', 'label': 'Email'},
                {'fieldname': 'address', 'fieldtype': 'Data', 'label': 'Address'},
                {'fieldname': 'phone_number', 'fieldtype': 'Phone', 'label': 'Phone number'}
            ],
            function(values){
                var contact_information_data= {
                    'email': values.email,
                    'address': values.address,
                    'phone_number': values.phone_number
                };
                frm.set_value('contact_information', [contact_information_data]);
                var contact_details_data = {
                    'email': values.email,
                    'address': values.address,
                    'phone_number': values.phone_number
                };
                frm.set_value('contact_details', [contact_details_data]);
            }, 'Enter Data', 'Submit');
        });
        frm.fields_dict['contact_information'].grid.wrapper.on('grid-row-remove', function(e) {
            var removed_row_name = e.row.name;
            var contact_details_data = frm.doc.contact_details || [];
            frm.doc.contact_details.forEach(function(row, index) {
                if (row.name === removed_row_name) {
                    frm.doc.contact_details.splice(index, 1);
                    frm.refresh_field('contact_details');
                    return false;
                }
            });
        });
    }
});









