ContactMePGP is a utility to enable you (a PGP/OpenPGP/GPG user) to be
securely contacted by someone who doesn't use these technologies.

Backstory: after I set up enigmail, I was quickly disappointed by the
low adoption among my friends. It reminded me of the old saying about
the owner of the world's only fax machine. So I created this program.

But by embedding this webform on your website, anyone can send you
private messages. The algorithms are implemented in javascript, so
people can contact you without installing anything. Because the
encryption and form submission is implemented in human-readable js,
the user can be sure that there isn't anything suspect going on
(submitting the plain text to the server, for example).

To get started, navigate to the index.html in the install
directory. Then fill in the corresponding values in config.js, and put
your email address in config.php. Then you can embed contents of
index.html (in this directory) anywhere, and watch those emails fly
in.

Copyright (C) 2016 Max Galloway webmaster@pwipw.com

This file is part of ContactMePGP.
    
ContactMePGP is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
