openerp.sbb_pos_receipt = function(instance){
    var module   = instance.point_of_sale;
    var round_pr = instance.web.round_precision
    var QWeb = instance.web.qweb;
    _t = instance.web._t;

    var PosModelSuper = module.PosModel
    module.PosModel = module.PosModel.extend({
    load_server_data: function(){
        var self = this;
        var loaded = PosModelSuper.prototype.load_server_data.call(this);

        loaded = loaded.then(function(){
            return self.fetch(
                'res.company',
                [
                    'currency_id',
                    'email',
                    'website',
                    'company_registry',
                    'name',
                    'phone',
                    'partner_id',
                    'country_id',
                    'tax_calculation_rounding_method',
                    'logo'
                ],
                [['id', '=', self.user.company_id[0]]]
            ).then(function(companies){
                self.company = companies[0];
                
                return self.fetch(
                    'res.partner',
                        [
                            'id',
                            'name',
                            'street',
                            'street2',
                            'city',
                            'state_id'
                        ],
                    [['id','=', self.company.partner_id[0]]]
                ).then(function(partner){
                    self.contact_address = partner[0];
                });    
            });
        });
        return loaded;
    },
    })
}
