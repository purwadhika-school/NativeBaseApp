import React, { Component } from "react"
import { Container, Header, Content, Button, Text } from "native-base"
import { Modal, View, TouchableHighlight } from "react-native"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalVisible: false
    }
  }

  setModalVisible(status) {
    this.setState({ isModalVisible: status })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button
            onPress={() => {
              this.setModalVisible(true)
            }}
            style={{ margin: 10 }}
            block
            success
          >
            <Text>Cek Tagihan Detail</Text>
          </Button>
        </Content>

        {/* Modal */}
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isModalVisible}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(false)
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      </Container>
    )
  }
}
