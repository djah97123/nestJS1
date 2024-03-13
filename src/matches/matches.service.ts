import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class MatchesService {
  private readonly filePath = 'data/matches.json';

  getAllMatches() {
    return fs.readJSONSync(this.filePath);
  }

  getMatchById(id: number) {
    const matches = this.getAllMatches();
    const match = matches.find(match => match.id === +id); 
    return match;
  }

  addMatch(newMatch) {
    const matches = this.getAllMatches();
    matches.push(newMatch);
    fs.writeJSONSync(this.filePath, matches);
  }
}
