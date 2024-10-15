import { render } from "@testing-library/react"
import DispensationDinalized from "./DispensationFinalized"
import { mockMetaData, mockFiles } from  '../../../srvices/test-mockData'

describe('DispensationFinalized', () => {
    
    it('renders with correct activity for rejected approval', () =>{
        const { getByText } = render(
            <DispensationDinalized metadata={mockMetaData} files={mockFiles} previewFile={""} />
        )
    })
})