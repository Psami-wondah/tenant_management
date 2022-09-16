# Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
# For license information, please see license.txt
from ....tenant_management.utils import check_email
import frappe
from frappe.model.document import Document

class HouseOwner(Document):
	def validate(self):
		if not check_email(self.email):
			frappe.throw("Invalid Email")
