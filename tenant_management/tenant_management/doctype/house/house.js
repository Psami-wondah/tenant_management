// Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
// For license information, please see license.txt

frappe.ui.form.on("House", {
  refresh: function (frm) {
    frm.add_custom_button("Add Tenant", () => {
      frappe.new_doc("Tenant", {
        house: frm.doc.name,
      });
    });
  },
});
