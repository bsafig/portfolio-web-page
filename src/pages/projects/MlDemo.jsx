import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'Python', 'pandas', 'scikit-learn', 'yfinance', 'matplotlib', 'Jupyter Notebook',
  'Linear Regression', 'Random Forest', 'Data Preprocessing', 'Feature Engineering',
]

const subprojectSkills = ['C++', 'Command-Line Tools', 'File I/O', 'Data Preparation']

export default function MlDemo() {
  return (
    <ProjectLayout title="Basic Machine Learning Demo">
      <p>
        This project is a hands-on demonstration of applied machine learning that I built to practice the full
        data-science workflow: acquiring real-world data, cleaning imperfect datasets, engineering features, training
        models, and interpreting the results. Everything lives in a single, reproducible Jupyter Notebook backed by
        supporting CSV files, so the analysis is easy to follow end to end.
      </p>

      <p>The demo pairs two distinct machine learning problems to show different techniques side by side.</p>

      <h4>Stock Market Prediction</h4>
      <ul>
        <li>Downloads historical market data through the Yahoo Finance API (yfinance).</li>
        <li>Applies a train/test split and fits a linear regression model.</li>
        <li>Evaluates performance using Mean Squared Error.</li>
        <li>Visualizes actual versus predicted closing prices with matplotlib.</li>
      </ul>

      <h4>Stanley Cup Prediction</h4>
      <ul>
        <li>Aggregates NHL team statistics across multiple seasons (2000–2005 and 2024–2025).</li>
        <li>Handles preprocessing, including standardizing inconsistent team names and label-encoding categorical variables.</li>
        <li>Trains a Random Forest classifier to generate win-probability predictions for every team.</li>
        <li>Reports model accuracy to gauge reliability.</li>
      </ul>

      <ProjectLinks links={[{ label: 'View on GitHub →', href: 'https://github.com/bsafig/basic-ml-demo' }]} />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />

      <div className="subproject">
        <h5>Related Tool: txt-to-csv Converter</h5>
        <p>
          To feed clean data into the Stanley Cup model, I wrote a lightweight command-line utility in C++ that converts
          raw text files into CSV format. It uses a simple Input/Output folder structure and ships with a compiled
          Windows executable (<code>ttcsv.exe</code>) for immediate use. This tool was purpose-built to prepare the
          hockey-prediction datasets used in this ML demo.
        </p>
        <ProjectLinks
          links={[
            {
              label: 'View txt-to-csv on GitHub',
              href: 'https://github.com/bsafig/txt-to-csv-for-hockey-predictions',
              secondary: true,
            },
          ]}
        />
        <SkillTags tags={subprojectSkills} />
      </div>
    </ProjectLayout>
  )
}
