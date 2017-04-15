# -*- coding: utf-8 -*-
# Copyright 2017 OpenSynergy Indonesia
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
{
    "name": "Sarang Buku Bekas PoS Receipt",
    "version": "8.0.1.0.0",
    "category": "Point Of Sale",
    "author": "OpenSynergy Indonesia",
    "website": "https://opensynergy-indonesia.com",
    "license": "AGPL-3",
    "installable": True,
    "auto_install": False,
    "depends": [
        "point_of_sale"
    ],
    "data": [
        "views/point_of_sale_views.xml"
    ],
    "qweb": [
        "static/src/xml/point_of_sale_template.xml",
    ],
}
