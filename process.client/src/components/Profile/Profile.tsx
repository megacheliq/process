const Profile: React.FC = () => {

    return (
        <div className="content-wrapper" style={{ minHeight: '90vh' }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">
                            </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            </ol>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div id="alerts">
                            <div className="user-alerts">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="app">
                                <div className="row">
                                    <div className="col-6">
                                        <div data-v-c95b3678="" className="card">
                                            <div data-v-c95b3678="" className="card-body">
                                                <h3 data-v-c95b3678="">Profile info</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div data-v-61764b5a="" className="card">
                                            <div data-v-61764b5a="" className="card-body">
                                                <div data-v-61764b5a="" className="row justify-content-between mb-4">
                                                    <div data-v-61764b5a="">
                                                        <h3 data-v-61764b5a="" className="mb-0">Sessions</h3>
                                                    </div>
                                                    <div data-v-61764b5a="">
                                                        <button data-v-61764b5a="" type="button" className="btn btn-danger">Deactivate all sessions</button>
                                                    </div>
                                                </div>
                                                <div data-v-61764b5a="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;