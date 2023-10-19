import React from 'react';
import { BsFillPencilFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import "./index.css"

function AccountEdit() {
    return (
        <div className="column2">
                    <a className="btn1 float-end" href="/kanbas/profile/index.html" role="button">
                    <BsFillPencilFill/>
                            Cancel Editing
                        </a>
                        <BiUserCircle size={200}/>
                    <br/><br/>
                <form action="/kanbas/profile/index.html">
                Name: <input name="fullName" type="text" value="Alice Wonderland"/>

                Pronouns: <select>
                    <option>None</option>
                </select>
                <br/>
                <br/>
                Title: <input type="text"/>
                <br/>
                <br/>
                <h3>Contact</h3>
                No registered services, you can add some on the settings page.
                <br/>
                <br/>
                <h3>Biography</h3>
                <textarea name="bio">Followed the white rabbit down the hole.</textarea>
                <br/>
                <br/>
                <h3>Links</h3>
                <ul>
                    
                        <i className="fas fa-link"></i>
                        <a className="wd-fg-color-red" href="https://www.youtube.com/@WebDevTV">YouTube</a>
                    

                    <br/>
                <table>
                    <tr>
                        <td>Title</td>
                        <td>URL</td>
                    </tr>
                    <br/>
                    <tr>
                        <td><input type="text" value="YouTube"/></td> 
                        <td><input type="text" value="https://www.youtube.com/@WebDevTV"/>
                    Remove</td></tr>
                </table>
                </ul>
                <a className="btn1" role="button">
                        Add Another Link
                    </a>
                <br/>
                <br/>
                <a className="btn1 move-buttons" href="/kanbas/profile/index.html" role="button">
                    
                        Cancel
                    </a>
                    <a className="btn2"  href="/kanbas/profile/index.html" role="button">
                        
                            Save Profile
                        </a>
                </form>
            </div>
    )
}
export default AccountEdit;