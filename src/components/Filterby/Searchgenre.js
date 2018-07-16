import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Searchgenre extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'Blues', label: 'Blues' },
          { value: 'Brazilian', label: 'Brazilian' },
          { value: 'Classical', label: 'Classical' },
          { value: 'Country', label: 'Country' },
          { value: 'EDM/Dance', label: 'EDM/Dance' },
          { value: 'Folk Americana', label: 'Folk Americana' },
          { value: 'Funk', label: 'Funk' },
          { value: 'Hip Hop', label: 'Hip Hop' },
          { value: 'Indie Alt', label: 'Indie Alt' },
          { value: 'Inspirational', label: 'Inspirational' },
          { value: 'Jazz', label: 'Jazz' },
          { value: 'Kpop', label: 'Kpop' },
          { value: 'Latin', label: 'Latin' },
          { value: 'Metal', label: 'Metal' },
          { value: 'Pop', label: 'Pop' },
          { value: 'Punk', label: 'Punk' },
          { value: 'Reggae', label: 'Reggae' },
          { value: 'RnB', label: 'RnB' },
          { value: 'Rock', label: 'Rock' },
          { value: 'Soul', label: 'Soul' },
        ]}
      />
    );
  }
}

export default Searchgenre;