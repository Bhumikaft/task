// Copyright (c) 2024, bhumika and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Customer Details", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("Customer Details", {
    refresh(frm) {
        frm.add_custom_button(__('Add Contact Information'), function() {
            frappe.prompt([
                {
                    "fieldname": "email",
                    "fieldtype": "Data",
                    "label": "Email"
                },
                {
                    "fieldname": "address",
                    "fieldtype": "Data",
                    "label": "Address"
                },
                {
                    "fieldname": "phone number",
                    "fieldtype": "Data",
                    "label": "Phone Number"
                }
            ],
            function(values) {
                var child_table = cur_frm.add_child('contact_information');
                child_table.email = values.email;
                child_table.address = values.address;
                child_table.phone_number = values.phone_number;
                refresh_field('contact_information');
            }, __('Add Contact Information'));
        });
    }
});





