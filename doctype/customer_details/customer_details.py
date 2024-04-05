# Copyright (c) 2024, bhumika and contributors
# For license information, please see license.txt
import frappe
from frappe.model.document import Document

class CustomerDetails(Document):
    pass

    @frappe.whitelist()
    def get_customer_email(self, customer_name):
        try:
            customer = frappe.get_doc("Customer", {"customer_name": customer_name})
            return {"email": customer.email}
        except frappe.DoesNotExistError:
            return {"error": "Customer not found"}