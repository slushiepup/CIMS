/*CIMS, The open source Cloud Inventory Management System.
Copyright (C) 2018 Launchpad Technical Solutions LLC and David Green <pbcub1.dg@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.*/

import React, {Component} from 'react';

class Footer extends Component {
    constructor( props ){
        super(props);

        //This will be used later.
    }
    
    render() {
        return (
            <div className="Footer">
                <h1>Copyright (c) 2018 Launchpad Technical Solutions LLC. This software is <a href="https://github.com/pbcub1/CIMS">open source</a> available under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL V3</a> license.</h1>
            </div>
        );
    }
}

export default Footer;