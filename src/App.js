import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Flag,
  Icon,
  Input,
  Header,
  Image,
  Container,
  Divider,
  Label,
  Button,
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Grid container verticalAlign="middle">
          <Grid.Column width={1}>
            <Flag name="id" size="large" />
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon name="angle left" />
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon name="angle right" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Input
              fluid
              icon="star"
              size="large"
              placeholder="Search..."
              width="80%"
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h3">
              <Image
                circular
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              Patrick
            </Header>
          </Grid.Column>
        </Grid>
        <Divider horizontal>SELAMAT DATANG</Divider>
        <Grid container textAlign="right">
          <Grid.Column>
            <Label as="a" color="teal" tag>
              Sport
            </Label>
          </Grid.Column>
        </Grid>
        <br />
        <Container textAlign="center">
          <p>
            Jakarta - Ducati tengah menunggu sidang Pengadilan Banding FIM
            tentang komponen aerodinamis. Andai gugatan para rivalnya diterima,
            akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase
            Olahraga)? Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan
            komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo
            Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap
            ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai
            mengalahkan Marc Marquez. Keempat tim meyakini, komponen itu
            memiliki fungsi aerodinamis, dan menghasilkan downforce, yang
            membantu motor melesat di trek. Sementara Ducati bersikukuh komponen
            itu cuma untuk mendinginkan ban dan sudah disetujui Technical
            Director sebelum balapan. Pada awalnya, protes keempat tim itu
            ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding
            FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di
            Argentina digelar pada 29-31 Maret mendatang. Manajer umum Ducati
            Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu.
            Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati
            akan mempertimbangkan melanjutkan kasus ini ke CAS. "Di dalam
            federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus
            pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus
            ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada
            MotoGP.com. "Saya bahkan tidak ingin memikirkan sampai titik ini.
            Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin
            kami tidak melihat adanya alasan mengapa pengadilan banding bisa
            memutuskan secara berbeda."
          </p>
        </Container>
        <br />
        <br />
        <Grid container textAlign="center">
          <Grid.Column>
            <Button icon labelPosition="left" color="teal">
              <Icon name="plus" />
              Tambah Tautan Ke List
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
