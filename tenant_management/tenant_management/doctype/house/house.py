# Copyright (c) 2022, Owhondah Okechukwu Samuel and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator

class House(WebsiteGenerator):
	def before_save(self):
		self.route = f'houses/{self.name}'
