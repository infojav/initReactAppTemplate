import React/*, { useState } */ from 'react'
import { connect } from 'react-redux' 
import { createStructuredSelector } from 'reselect'

import {
  selectors,
  actions
} from '../'

const { getIsLoading, getLoadError, getLoadSuccess, getData } = selectors;

interface StateProps {
  isLoading: boolean,
  isLoadSuccess: boolean,
  isLoadError: Error,
  dataFile: object
}

interface DispatchProps {
  load: (s: string) => void
  onLoadSuccess: (data: object) => void
  onLoadError: (e: Error) => void
}

type Props = StateProps & DispatchProps


const BaseFileViewer: React.FC<Props> = ({
  load,
  onLoadSuccess,
  onLoadError,
  isLoading,
  isLoadSuccess,
  isLoadError,
  dataFile
}) => {

  // const [ fileUrl, setFileUrl ] = useState('');

  // function handleInputChange(event: any) {
  //   event.preventDefault()
  //   setFileUrl(event.target.value)
  // }

  // const handleSubmitButton = (event: any) => {
  //   event.preventDefault()
  //   load(fileUrl)
  // }
  
  return (
    <div>
      {/* { isLoadError ? 
      <Alert variant="danger">
          <Alert.Heading>Oh! It was an error!</Alert.Heading>
      </Alert> : '' 
      }
      <Form>
        <Form.Control type="text" placeholder="Enter url" onChange={handleInputChange}/>
        <br/>
        <Button variant="primary" type="submit" block onClick={ handleSubmitButton }>
          View File
        </Button>
      </Form>
      <br/>
      { isLoading ? <Spinner animation="border" /> : '' }
      { isLoadSuccess ? <pre>{JSON.stringify(dataFile, null, 2)}</pre> : ''} */}
    </div>)
}

const mapDispatchToProps: DispatchProps = {
  load: actions.loadingRemoteFile,
  onLoadSuccess: actions.loadSuccessRemoteFile,
  onLoadError: actions.loadErrorRemoteFile
}

const mapStateToProps = createStructuredSelector<unknown, StateProps>({
  isLoading: getIsLoading,
  isLoadSuccess: getLoadSuccess,
  isLoadError: getLoadError,
  dataFile: getData

})

export const FileViewer = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(BaseFileViewer)