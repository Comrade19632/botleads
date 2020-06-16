import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {deleteLead, getLeads} from "../../actions/leads";


class Leads extends Component {
    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.phone_number}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td>
                                <button onClick={() => {
                                    this.props.deleteLead(lead.id)
                                }} className='btn btn-danger btn-sm rounded'> DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads,
});

export default connect(mapStateToProps, {getLeads, deleteLead})(Leads);