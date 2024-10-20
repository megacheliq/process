import parse from 'html-react-parser';

const Tickets: React.FC = () => {
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
                                <div id="app"><div data-v-36be4828="" class="card card-primary card-tabs"><div data-v-36be4828="" class="card-header p-0 pt-1"><ul data-v-36be4828="" class="nav nav-tabs nav-justified"><li data-v-36be4828="" class="nav-item"><a data-v-36be4828="" href="#" class="nav-link active">New</a></li> <li data-v-36be4828="" class="nav-item"><a data-v-36be4828="" href="#" class="nav-link">In work</a></li> <li data-v-36be4828="" class="nav-item"><a data-v-36be4828="" href="#" class="nav-link">Fixed</a></li></ul></div> <div data-v-36be4828="" class="card-body"><div data-v-36be4828="" class="row"><div data-v-36be4828="" class="col mb-2"><div data-v-36be4828="" class="btn-toolbar float-left"><a data-v-36be4828="" class="btn btn-info">Reset filters</a></div></div> <div data-v-36be4828="" class="col mb-2"><div data-v-36be4828="" class="btn-toolbar float-right"><div data-v-36be4828="" class="btn-group mr-2"><button data-v-36be4828="" data-target="#download-csv-ticket" data-toggle="modal" class="btn btn-secondary btn-block"><svg data-v-36be4828="" class="svg-inline--fa fa-download fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg><!-- <i data-v-36be4828="" class="fa fa-download"></i> Font Awesome fontawesome.com --> CSV
            </button> <div data-v-5190bedc="" data-v-36be4828="" id="download-csv-ticket" data-backdrop="static" data-keyboard="false" class="modal fade"><div data-v-5190bedc="" class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"><div data-v-5190bedc="" class="modal-content"><div data-v-5190bedc="" class="modal-header">
                Export to CSV
               <button data-v-5190bedc="" type="button" data-dismiss="modal" aria-label="Close" class="close"><span data-v-5190bedc="" aria-hidden="true">×</span></button></div> <div data-v-5190bedc="" class="modal-body"><div data-v-36be4828="" data-v-5190bedc="" class="container-fluid"><div data-v-36be4828="" data-v-5190bedc="" class="row"><div data-v-36be4828="" data-v-5190bedc="" class="col-6"><div data-v-36be4828="" data-v-5190bedc="" class="form-group"><label data-v-36be4828="" data-v-5190bedc="">Status</label> <select multiple="multiple" data-v-36be4828="" data-v-5190bedc="" class="form-control"><option data-v-36be4828="" data-v-5190bedc="">new</option><option data-v-36be4828="" data-v-5190bedc="">in_work</option><option data-v-36be4828="" data-v-5190bedc="">fixed</option></select></div></div> <div data-v-36be4828="" data-v-5190bedc="" class="col-6"><div data-v-36be4828="" data-v-5190bedc="" class="form-group"></div></div></div> <!----></div></div> <div data-v-5190bedc="" class="modal-footer"><button data-v-36be4828="" data-v-5190bedc="" type="button" class="btn btn-success">Export</button></div></div></div></div></div> <a data-v-36be4828="" class="btn btn-success">Create new</a></div></div></div> <div data-v-36be4828="" class="row"><div data-v-36be4828="" class="col" style="font-size: 0.8rem;"><table data-v-36be4828="" class="table table-bordered table-striped"><thead data-v-36be4828=""><tr data-v-36be4828="" role="row" class="text-center"><th data-v-36be4828="">Ticket Number</th> <th data-v-36be4828="">Reason Appeal</th> <th data-v-36be4828="">Subject</th> <th data-v-36be4828="">Partner</th> <th data-v-36be4828="">Operation Id</th> <th data-v-36be4828="">Status</th> <th data-v-36be4828="">Resolution</th> <!----> <th data-v-36be4828="">Created By User</th> <th data-v-36be4828="">Created At</th></tr></thead> <tbody data-v-36be4828=""><tr data-v-36be4828="" class="text-center"><td data-v-36be4828=""><div data-v-36be4828="" class="form-group"><input data-v-36be4828="" placeholder="id" type="number" class="form-control"></div></td> <td data-v-36be4828=""><div data-v-36be4828="" class="form-group"><select data-v-36be4828="" type="text" class="form-control"><option data-v-36be4828=""></option> <option data-v-36be4828="">finalization</option><option data-v-36be4828="">receipt</option><option data-v-36be4828="">other</option></select></div></td> <td data-v-36be4828=""></td> <td data-v-36be4828=""><div data-v-36be4828="" class="form-group"><select data-v-36be4828="" type="text" class="form-control"><option data-v-36be4828=""></option> <option data-v-36be4828="">t1_bucket_01</option></select></div></td> <td data-v-36be4828=""><input data-v-36be4828="" placeholder="operation_id" type="number" class="form-control"></td> <td data-v-36be4828=""></td> <td data-v-36be4828=""><div data-v-36be4828="" class="form-group"><!----></div></td> <!----> <td data-v-36be4828=""><input data-v-36be4828="" placeholder="created_by_user" type="text" class="form-control"></td> <td data-v-36be4828="" class="text-center"><div data-v-36be4828="" id="createdAt-daterange-filter" class="input-group"><button data-v-36be4828="" id="createdAt-filter-daterange-btn" type="button" class="btn btn-default float-right"><svg data-v-36be4828="" class="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg><!-- <i data-v-36be4828="" class="far fa-calendar-alt"></i> Font Awesome fontawesome.com --> <svg data-v-36be4828="" class="svg-inline--fa fa-caret-down fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg><!-- <i data-v-36be4828="" class="fas fa-caret-down"></i> Font Awesome fontawesome.com --> <span data-v-36be4828=""></span></button></div></td></tr> </tbody></table></div></div></div></div></div>
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

export default Tickets;