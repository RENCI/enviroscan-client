import React from "react";
import { Header, Item, List } from "semantic-ui-react";
import { Link } from '../../Link'

function Sociodemographic() {
  return (
    <div className="page-contain">
      <Header as="h1" className="page-title">Sociodemographic Indicators</Header>

      <p>
        NC ENVIROSCAN contains information on social and demographic indicators that are important
        for understanding the population characteristics in an area. Exploring these indicators
          allows users to examine whether certain populations may be more vulnerable than others to
        exposure to toxic chemicals or particular health outcomes.
      </p>

      <Header as="h2">Why are we concerned about these indicators? </Header>

      <p>
        Certain groups of people, including those living in poverty and certain racial or ethnic
        groups, can be disproportionately burdened by exposure to pollution in the environment,
        and as result, at greater risk of experiencing adverse health outcomes.
      </p>

      <Header as="h2">Which sociodemographic indicators can I explore?</Header>

      <Header as="h3">Poverty</Header>

      <p>
        People living in poverty are less likely to have access to resources and medical care that
        can help prevent or treat illnesses caused by environmental exposures. Poverty in the
        United States is measured against one out of 48 possible poverty thresholds, which vary by
        the size of the family and age of the members. ENVIROSCAN maps the percentage of the population
        in a census tract with an income level below the poverty threshold for their family size.
      </p>

      <Header as="h4">For more information</Header>

      <ul>
        <li><Link to="https://www.census.gov/topics/income-poverty/poverty/about.html">How the US Census Measures Poverty</Link></li>
        <li>Map poverty in NC (Link to launch mapping tool with preconfigured view of poverty indicator)</li>
      </ul>

      <Header as="h3">Race & Ethnicity</Header>

      <p>
        Research has shown that certain racial and ethnic groups are disproportionately affected by
        exposure to toxic environmental chemicals. In ENVIROSCAN, users can map the percentage of
        the population in a given Census tract that identify as the following races: Asian, Black
        or African American, Native American, Native Hawaiian or Pacific Islander, or White. Users
        can also map the percentage of the population that identify as Hispanic.
      </p>

      <Header as="h4">For more information</Header>
      <ul>
        <li><Link to="https://www.census.gov/topics/population/race/about.html">About Race</Link> (US Census)</li>
        <li><Link to="https://www.census.gov/topics/population/hispanic-origin/about.html">About Hispanic Origin</Link> (US Census)</li>
      </ul>

      <Header as="h3">Linguistic Isolation</Header>

      <p>
        Linguistic isolation means living in a household in which all members aged 14 years and older
        speak a non-English language and do not speak English “very well.” Linguistically isolated
        populations may experience a language barrier that prevents them from accessing resources
        that enable them to prevent and manage illness resulting from environmental exposures.
      </p>

      <Header as="h4">For more information</Header>
      
      <ul>
        <li><Link to="https://www.census.gov/topics/population/language-use/about.html">About Language Use</Link> (US Census)</li>
      </ul>


      <Header as="h2">How do we map the data?</Header>

      <p>
        In ENVIROSCAN, we provide sociodemographic data as a percentage of the total population
        in each US Census tract.
      </p>

      <Header as="h2">When and where were these data collected?</Header>

      <p>
        These data were retrieved from the 2019 U.S. Census American Community Survey. They are
        based on a 5-year estimate, which is a "period" estimate that represents data collected
        over a period of time, to increase statistical reliability.
      </p>
    </div>
  );
}

export default Sociodemographic;