import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './routes/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { GenrePipePipe } from './pipes/genrePipe/genre-pipe.pipe';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { SortByDateComponent } from './routes/sort-by-date/sort-by-date.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { MovieratingsService } from './services/movieratings.service';
import { CommentsService } from './services/comments.service';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MatchMoviesComponent } from './routes/matchMovies/matchMovies.component';
import { MoviesFromDBComponent } from './components/moviesFromDB/moviesFromDB.component';
import { MoviesFromApiComponent } from './components/moviesFromApi/moviesFromApi.component';
import { MoviesFromApiService } from './services/movieFromApi.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReviewComponent } from './components/review/review.component';
import { PopularComponent } from './routes/popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    LoadingPageComponent,
    FilterByGenreComponent,
    GenrePipePipe,
    WelcomePageComponent,
    SortByDateComponent,
    ReviewsComponent,
    MatchMoviesComponent,
    MoviesFromDBComponent,
    MoviesFromApiComponent,
    SignUpComponent,
    ReviewComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, AuthService, UserService, MovieratingsService, CommentsService,MoviesFromApiService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
