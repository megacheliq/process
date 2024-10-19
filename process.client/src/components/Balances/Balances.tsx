import parse from 'html-react-parser';

const Balances: React.FC = () => {
    const htmlString = `<div class="content-wrapper" style="min-height: 1011.2px;">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">
                                                                                            </h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                                                                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                    <div class="row mb-2">
                        <div id="alerts"><div class="user-alerts"><!----></div></div>
                    </div>
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                                <div id="app"><div data-v-58919dbb="" class="card card-tabs"><div data-v-58919dbb="" class="card-body"><h1 data-v-58919dbb="">Balances</h1> <nav data-v-58919dbb="" class="nav__balance"><ul data-v-58919dbb="" role="tablist" class="nav nav-pills mb-3"><!----> <li class="nav-item"><a href="#trade" class="nav-link active">Trade Balances</a></li></ul> <div data-v-58919dbb=""><button data-v-58919dbb="" type="button" class="btn btn-success">New TOP-UP</button></div></nav> <div data-v-58919dbb="" class="card"><!----> <table data-v-58919dbb="" class="table table-bordered table-striped"><thead data-v-58919dbb=""><tr data-v-58919dbb=""><th data-v-58919dbb="">
              Alias (ID)
            </th><th data-v-58919dbb="">
              Currency
            </th><th data-v-58919dbb="">
              Available
            </th><th data-v-58919dbb="">
              Current
            </th><th data-v-58919dbb="">
              Hold
            </th><th data-v-58919dbb="">
              Updated At
            </th></tr></thead> <tbody data-v-58919dbb=""><tr data-v-58919dbb=""><td data-v-58919dbb=""><a data-v-58919dbb="" href="/balance/t1_bucket_01/trade/192833">
                  17.8.0 monera (TPYZqFU8CGHLg8UoMBN6BHcxM73HueGdrZ)
                </a></td><td data-v-58919dbb="">
                  RUB
                </td><td data-v-58919dbb="">
                0,00
              </td><td data-v-58919dbb="">
                0,00
              </td><td data-v-58919dbb=""><a data-v-58919dbb="" href="/balance/holds/t1_bucket_01/192833/RUB">0,00</a></td><td data-v-58919dbb="">
                30.09.2024 18:14:01
              </td></tr></tbody> <tfoot data-v-58919dbb=""><tr data-v-58919dbb=""><th data-v-58919dbb="">
              Alias (ID)
            </th><th data-v-58919dbb="">
              Currency
            </th><th data-v-58919dbb="">
              Available
            </th><th data-v-58919dbb="">
              Current
            </th><th data-v-58919dbb="">
              Hold
            </th><th data-v-58919dbb="">
              Updated At
            </th></tr></tfoot></table></div></div> <div data-v-58919dbb=""><div class="col d-sm-flex justify-content-sm-center"><div data-v-5190bedc="" id="preset-top-up-form" data-backdrop="static" data-keyboard="false" class="modal fade"><div data-v-5190bedc="" class="modal-dialog modal-dialog-scrollable modal-dialog-centered"><div data-v-5190bedc="" class="modal-content"><div data-v-5190bedc="" class="modal-header"><h3 data-v-5190bedc="">New TOP-UP</h3> <button data-v-5190bedc="" type="button" data-dismiss="modal" aria-label="Close" class="close"><span data-v-5190bedc="" aria-hidden="true">×</span></button></div> <div data-v-5190bedc="" class="modal-body"><div data-v-5190bedc=""><!----> <div data-v-5190bedc="" class="form-group"><label data-v-5190bedc="" for="balance">Balance</label> <div dir="auto" class="v-select vs__selected-border-options vs--single vs--searchable" data-v-5190bedc=""> <div id="vs1__combobox" role="combobox" aria-expanded="false" aria-owns="vs1__listbox" aria-label="Search for option" class="vs__dropdown-toggle"><div class="vs__selected-options"> <input aria-autocomplete="list" aria-labelledby="vs1__combobox" aria-controls="vs1__listbox" type="search" autocomplete="off" class="vs__search"></div> <div class="vs__actions"><button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs__clear" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path></svg></button> <svg data-v-12ed6176="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="presentation" class="vs__open-indicator"><polygon data-v-12ed6176="" points="18.43 7.72 19.5 8.78 12 16.28 4.5 8.78 5.57 7.72 12 14.16 18.43 7.72" style="stroke-width: 1;"></polygon></svg> <div class="vs__spinner" style="display: none;">Loading...</div></div></div> <ul id="vs1__listbox" role="listbox" style="display: none; visibility: hidden;"></ul> </div></div> <div data-v-5190bedc="" class="form-group"><label data-v-5190bedc="" for="targetWallet">Target Wallet</label> <input data-v-5190bedc="" id="targetWallet" required="required" disabled="disabled" class="form-control"></div> <!----> <div data-v-5190bedc=""><!----> <!----> <!----> <!----> <!----> <div data-v-5190bedc=""><button data-v-5190bedc="" type="button" disabled="disabled" class="btn btn-success">Create top-up</button></div></div></div></div> <div data-v-5190bedc="" class="modal-footer"><div data-v-5190bedc=""></div></div></div></div></div></div></div> <!----> <!----> <!----> <div data-v-18616d0e="" data-v-58919dbb=""><div data-v-18616d0e="" class="col d-sm-flex justify-content-sm-center"><div data-v-5190bedc="" data-v-18616d0e="" id="top-up-form" data-backdrop="static" data-keyboard="false" class="modal fade"><div data-v-5190bedc="" class="modal-dialog modal-dialog-scrollable modal-dialog-centered"><div data-v-5190bedc="" class="modal-content"><div data-v-5190bedc="" class="modal-header"><h3 data-v-18616d0e="" data-v-5190bedc="">New top-up</h3> <button data-v-5190bedc="" type="button" data-dismiss="modal" aria-label="Close" class="close"><span data-v-5190bedc="" aria-hidden="true">×</span></button></div> <div data-v-5190bedc="" class="modal-body"><div data-v-18616d0e="" data-v-5190bedc=""><div data-v-18616d0e="" data-v-5190bedc="" class="form-group"><label data-v-18616d0e="" data-v-5190bedc="" for="partner">Partner</label> <input data-v-18616d0e="" data-v-5190bedc="" id="partner" required="required" disabled="disabled" class="form-control"> <!----></div> <div data-v-18616d0e="" data-v-5190bedc="" class="form-group"><label data-v-18616d0e="" data-v-5190bedc="" for="availableBalance">Currency</label> <input data-v-18616d0e="" data-v-5190bedc="" id="availableBalance" required="required" disabled="disabled" class="form-control"> <!----></div> <div data-v-18616d0e="" data-v-5190bedc="" class="form-group"><label data-v-18616d0e="" data-v-5190bedc="" for="hash">Hash</label> <input data-v-18616d0e="" data-v-5190bedc="" id="hash" required="required" class="form-control"> <!----></div> <div data-v-18616d0e="" data-v-5190bedc="" class="form-group"><label data-v-18616d0e="" data-v-5190bedc="" for="amount">Amount</label> <input data-v-18616d0e="" type="tel" class="v-money form-control" id="amount" name="amount" required="required" data-v-5190bedc=""> <!----></div> <div data-v-18616d0e="" data-v-5190bedc="" class="form-group"><label data-v-18616d0e="" data-v-5190bedc="" for="comment" class="required">Comment:</label> <textarea data-v-18616d0e="" data-v-5190bedc="" id="comment" name="comment" type="text" class="form-control"></textarea> <!----></div> <!----> <!----> <!----> <!----> <div data-v-18616d0e="" data-v-5190bedc=""><button data-v-18616d0e="" data-v-5190bedc="" type="button" class="btn btn-success">Create</button></div></div></div> <div data-v-5190bedc="" class="modal-footer"><div data-v-18616d0e="" data-v-5190bedc=""></div></div></div></div></div></div></div> <!----> <!----></div></div>
                        </div>
                    </div>
                    <!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>`;

        return (
            <>
                {parse(htmlString)}
            </>
        )

}

export default Balances;