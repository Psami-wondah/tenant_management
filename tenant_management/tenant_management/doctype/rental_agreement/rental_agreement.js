// Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Rental Agreement", {
  refresh: function (frm) {
    frm.add_custom_button("Add Payment", () => {
      frappe.new_doc("Rent Payment", {
        rental_agreement: frm.doc.name,
      });
    });
  },
});
