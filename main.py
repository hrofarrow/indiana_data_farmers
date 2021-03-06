from flask import Flask
from flask import jsonify
import pandas as pd
from flask_cors import CORS
import pickle
import pandas as pd

# Use pickle to load in the pre-trained model.
with open(f'model/mlb_betting.pkl', 'rb') as f:
    model = pickle.load(f)

app = Flask(__name__, template_folder='templates')
CORS(app)


@app.route('/<FIELD>/<Side_Line>/<OU_Line>/<OU_Odds>', methods=['GET', 'POST'])
def main(FIELD, Side_Line, OU_Line, OU_Odds):

    input_variables = pd.DataFrame([[FIELD, Side_Line, OU_Line, OU_Odds]],
                                   columns=['FIELD', 'Side Line',
                                            "OU Line", "OU_Odds"],
                                   dtype=float)

    prediction = model.predict(input_variables)[0]

    return jsonify(prediction)


if __name__ == '__main__':
    app.run()
