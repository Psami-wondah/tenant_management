// Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Tenant", {
  refresh: function (frm) {
    frm.add_custom_button("Create New Rental Agreement", () => {
      frappe.new_doc("Rental Agreement", {
        tenant: frm.doc.name,
      });
    });
    frm.add_custom_button("Add Billing Info", () => {
      frappe.new_doc("Billing Information", {
        tenant: frm.doc.name,
      });
    });
  },
});
