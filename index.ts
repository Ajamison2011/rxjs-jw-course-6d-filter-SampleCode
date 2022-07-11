import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface NewsItem {
  category: 'Buisness' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(
    () => subscriber.next({ category: 'Buisness', content: 'A' }),
    1000
  );
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 3000);
  setTimeout(
    () => subscriber.next({ category: 'Buisness', content: 'C' }),
    4000
  );
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 6000);
  setTimeout(
    () => subscriber.next({ category: 'Buisness', content: 'E' }),
    7000
  );
});

newsFeed$.pipe(filter((x) => x.category === 'Sports')).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});


// Shorthand methiod! 
// const sportsNewsFeed$ = newsFeed$.pipe(
//   filter((item) => item.category === 'Sports')
// );
// sportsNewsFeed$.subscribe((item) => console.log(item));
