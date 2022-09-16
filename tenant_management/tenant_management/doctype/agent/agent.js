// Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Agent", {
  refresh: function (frm) {
    frm.add_custom_button("Add House Owner", () => {
      frappe.new_doc("House Owner", {});
    });
  },
});
