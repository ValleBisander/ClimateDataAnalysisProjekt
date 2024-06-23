import os
import pandas as pd

def get_project_root():

    return os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

def load_csv(filename, type):

    """
    Loads a cvs file from data/raw and return a pandas dataframe. 

    Parameters:
    filename : The name of the cvs file to load

    Type: 
    "Raw" or "Processed"

    Returns:
    pd.DataFrame: The loaded data as a pandas DataFrame.
    """
    project_root = get_project_root()
    file_path = os.path.join(project_root, 'data', type, filename)

    try:
        data = pd.read_csv(file_path)
        data['dt'] = pd.to_datetime(data['dt'])
        print(f"Data loaded successfully from {file_path}")
    
        return data
    except FileNotFoundError:
        print(f"File {file_path} not found.")
    except pd.errors.EmptyDataError:
        print(f"File {file_path} is empty.")
    except pd.errors.ParserError:
        print(f"Error parsing file {file_path}.")
    except Exception as e:
        print(f"An error occurred: {e}")