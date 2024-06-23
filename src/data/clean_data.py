import os

def save_cleaned_data(df, filename):
    """
    Saves the cleaned DataFrame to a CSV file in the data/processed directory.
    
    Parameters:
    df (pd.DataFrame): The cleaned DataFrame to save.
    filename (str): The name of the CSV file to save.
    """
    project_root = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
    processed_dir = os.path.join(project_root, 'data', 'processed')
    os.makedirs(processed_dir, exist_ok=True)
    file_path = os.path.join(processed_dir, filename)
    df.to_csv(file_path, index=False)
    print(f"Cleaned data saved to {file_path}")

def clean_data(df, columns_to_check, filename):
    """
    Cleans the given DataFrame by handling missing values, removing duplicates,
    and correcting invalid data.
    
    Parameters:
    df (pd.DataFrame): The DataFrame to clean.

    Returns:
    pd.DataFrame: The cleaned DataFrame.
    """
    # Delete missing values 
    df = df.dropna(subset= columns_to_check)
    # Delete dublicates
    df = df.drop_duplicates()
    save_cleaned_data(df, filename)




