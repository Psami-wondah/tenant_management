# Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from datetime import datetime,date

class RentalAgreement(Document):
	pass
	def validate(self):
		if datetime.strptime(self.start_date, "%Y-%m-%d").date() < date.today():
			frappe.throw("Start date must be today or ahead")
