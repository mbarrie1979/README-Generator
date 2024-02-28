
function renderLicenseBadge(license) {
  const licenseBadges = {
    "Apache-2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost-1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD-2-Clause": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "BSD-3-Clause": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "CC0-1.0": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "CC-BY-4.0": "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
    "CC-BY-SA-4.0": "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
    "CC-BY-NC-4.0": "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
    "CC-BY-ND-4.0": "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)",
    "CC-BY-NC-SA-4.0": "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
    "CC-BY-NC-ND-4.0": "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)",
    "EPL-1.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "GPLv2": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    "AGPL-3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "LGPL-3.0": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "MPL-2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "WTFPL": "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    "Zlib": "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
    // Add other licenses and badges as needed
  };

  // Return the badge markdown or an empty string if the license is not found
  return licenseBadges[license] || '';
}


function renderLicenseLink(license) {
  const licenseLinks = {
    "AFL-3.0": "https://opensource.org/licenses/AFL-3.0",
    "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
    "Artistic-2.0": "https://opensource.org/licenses/Artistic-2.0",
    "BSL-1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "BSD-2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
    "BSD-3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    "BSD-3-Clause-Clear": "https://spdx.org/licenses/BSD-3-Clause-Clear.html",
    "BSD-4-Clause": "https://spdx.org/licenses/BSD-4-Clause.html",
    "0BSD": "https://opensource.org/licenses/0BSD",
    "CC": "https://creativecommons.org/licenses/",
    "CC0-1.0": "https://creativecommons.org/publicdomain/zero/1.0/",
    "CC-BY-4.0": "https://creativecommons.org/licenses/by/4.0/",
    "CC-BY-SA-4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
    "WTFPL": "http://www.wtfpl.net/about/",
    "ECL-2.0": "https://opensource.org/licenses/ECL-2.0",
    "EPL-1.0": "https://opensource.org/licenses/EPL-1.0",
    "EPL-2.0": "https://opensource.org/licenses/EPL-2.0",
    "EUPL-1.1": "https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-11",
    "AGPL-3.0": "https://www.gnu.org/licenses/agpl-3.0.html",
    "GPL": "https://www.gnu.org/licenses/licenses.html", // General GPL link, as "GPL" encompasses multiple versions
    "GPL-2.0": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
    "GPL-3.0": "https://www.gnu.org/licenses/gpl-3.0.html",
    "LGPL": "https://www.gnu.org/licenses/lgpl.html", // General LGPL link, as "LGPL" encompasses multiple versions
    "LGPL-2.1": "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html",
    "LGPL-3.0": "https://www.gnu.org/licenses/lgpl-3.0.html",
    "ISC": "https://opensource.org/licenses/ISC",
    "LPPL-1.3c": "https://www.latex-project.org/lppl/",
    "MS-PL": "https://opensource.org/licenses/MS-PL",
    "MIT": "https://opensource.org/licenses/MIT",
    "MPL-2.0": "https://opensource.org/licenses/MPL-2.0",
    "OSL-3.0": "https://opensource.org/licenses/OSL-3.0",
    "PostgreSQL": "https://opensource.org/licenses/PostgreSQL",
    "OFL-1.1": "https://opensource.org/licenses/OFL-1.1",
    "NCSA": "https://opensource.org/licenses/NCSA",
    "Unlicense": "https://unlicense.org/",
    "Zlib": "https://opensource.org/licenses/Zlib"
  };

  return licenseLinks[license] || 'License link not available';
}



function renderLicenseSection(license) {
  // Check if a license was selected
  if (!license || license === 'None') {
    return '';
  }

  // Generate the badge and link
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  // If there's no link available, only return the badge
  if (link === 'License link not available') {
    return `## License\n\n${badge}\n\nPlease refer to the project's license file for more information.`;
  }

  // Return the license section with both badge and link
  return `## License\n\n${badge}\n\nThis project is licensed under the [${license}](${link}) license.`;
}


function generateMarkdown(data) {
  const { email, github, title, description, dependencies, tests, needToKnow, contributions, credits } = data
  const licenseSection = renderLicenseSection(data.license);
  return `# ${title}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#repo-usage)
- [Credits](#credits)
${data.license ? '- [License](#license)' : ''}
- [Contributing](#how-to-contribute)
- [Tests](#tests)

---------

  ## Description
  ${description}
  
  
  
  ## Installation
  ${dependencies}
  
  
  ## Repo Usage
  ${needToKnow}
  
  
  
  ## Credits
  ${credits} - GitHub: ${github}
  
  ${licenseSection}
  
  
  ## How to Contribute
  ${contributions}
  
  
  ## Tests
  ${tests}
  
  ## Contact
  ${email}
  `;
}

module.exports = generateMarkdown;
