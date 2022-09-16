// Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
// For license information, please see license.txt

frappe.ui.form.on("House Owner", {
  refresh: function (frm) {
    frm.add_custom_button("Add House", () => {
      frappe.new_doc("House", {
        house_owner: frm.doc.name,
      });
    });
  },
});
