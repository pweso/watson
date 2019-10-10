import React from 'react';
import Thread from '../../types/Thread';
import ThreadOverviewRow from './ThreadOverviewRow';

type Props = {
  dates: Array<string | null>;
  isFilteredByStack: boolean;
  threadDumps: Array<Map<number, Thread>>;
};

const ThreadsOverview: React.SFC<Props> = ({ dates, isFilteredByStack, threadDumps }) => (
  <div id="threads-overview-table-wrapper">
    <table>
      <thead>
        <tr>
          <th />
          {dates.map((date, index) => (
            <th key={index}>
              {date}
              <span>{date}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {threadDumps.map((threads, index) => (
          <ThreadOverviewRow key={index}
            isFiltered={isFilteredByStack}
            total={dates.length}
            threads={threads}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default ThreadsOverview;
