import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from '../../Link'

const EnvironmentalJusticeIndicators = () => {
  return (
    <div className="page-contain">
      <Header as="h1" className="page-title">Sociodemographic Indicators</Header>

      <p>
        NC ENVIROSCAN contains information from the US Environmental Protection Agency (USEPA)
        in the form of environmental justice (EJ) indices. An EJ Index combines demographic
        factors with a single environmental factor. For example, the EJ Index for traffic is a
        combination of the following populations residing in the Census block group:
      </p>

      <ul>
        <li>The traffic indicator</li>
        <li>The low-income population</li>
        <li>The minority population</li>
      </ul>

      <p>
        Note that an EJ index does not combine various environmental factors into a cumulative
        score &mdash; each environmental indicator has its own EJ Index.
      </p>
      
      <p>
        To calculate a single EJ Index, EJSCREEN uses a formula to combine a single environmental
        factor with the demographic indicator. It considers how much the local demographics are
        above the national average. It does this by looking at the difference between the
        demographic composition of the block group, as measured by the Demographic Index, and the
        national average (which is approximately 35%). It also considers the population size of the
        block group, although most block groups are similar in population size.
      </p>
      
      <p>
        EJSCREEN calculates the EJ Index by multiplying together three items:
      </p>
      
      <p style={{ width: '90%', margin: '2rem 0 2rem 2rem', fontFamily: 'monospace', letterSpacing: '-1px' }}>
        EJ Index = (The Environmental Indicator)
        &times; (Demographic Index for Block Group &minus; Demographic Index for US)
        &times; (Population count for Block Group)
      </p>

      <p>
        The EJ Index is higher in block groups with large numbers of mainly low-income and/or
        minority residents with a higher environmental indicator value.
      </p>
      
      <Header as="h2">Why are we concerned about these indicators?</Header>

      <p>
        Exposure to environmental contaminants can result in negative health outcomes. Certain
        populations are more vulnerable to effects of these environmental exposures and may be more
        likely to experience adverse health outcomes. The EJ index data provided by USEPA allows
        users to map each environmental factor along with the block groups that contribute the most
        toward the nationwide disparity in that environmental factor. By "disparity" in this case
        we mean the difference between the environmental indicator's average value among these
        demographic groups and the average in the US population.
      </p>
      
      <Header as="h2">Which environmental justice indicators can I explore?</Header>

      <p>
        There are eleven EJ Indexes in EJSCREEN reflecting the
        eleven <Link to="https://www.epa.gov/ejscreen/overview-environmental-indicators-ejscreen">environmental indicators</Link> that are
        mapped in EJSCREEN. We have added all eleven to the ENVIROSCAN mapping tool.
        The 11 EJ Index names are:
      </p>
      
      <ul>
        <li>National Scale Air Toxics Assessment Air Toxics Cancer Risk</li>
        <li>National Scale Air Toxics Assessment Respiratory Hazard Index</li>
        <li>National Scale Air Toxics Assessment Diesel PM (DPM)</li>
        <li>Particulate Matter (PM2.5)</li>
        <li>Ozone</li>
        <li>Lead Paint Indicator</li>
        <li>Traffic Proximity and Volume</li>
        <li>Proximity to Risk Management Plan Sites</li>
        <li>Proximity to Treatment Storage and Disposal Facilities</li>
        <li>Proximity to National Priorities List Sites</li>
        <li>Wastewater Discharge Indicator</li>
      </ul>
      
      <p>
        <strong>For more information</strong> about <Link to="https://www.epa.gov/ejscreen">EJSCREEN</Link> and
        the <Link to="https://www.epa.gov/ejscreen">EJ Index scores</Link>,
        please visit the <Link to="https://www.epa.gov/ejscreen/what-ejscreen">USEPA EJSCREEN website</Link>.
      </p>
      
      <Header as="h2">How do we map the data?</Header>

      <p>
        In ENVIROSCAN, the EJ Index data is mapped by census block group. 
      </p>
      
      <p>
        <strong>Please Note</strong>: Since these EJ indices already combine demographic and
        environmental indicator information, these layers are best viewed on the single map view
        that does not allow layering with other indicators. 
      </p>
      
      <Header as="h2">When and where were these data collected?</Header>

      <p>
        These are the 2020 data retrieved from
        the <Link to="https://www.epa.gov/ejscreen/download-ejscreen-data">USEPA’s EJScreen website</Link>.
      </p>
    </div>
  );
}

export default EnvironmentalJusticeIndicators;