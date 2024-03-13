import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class TeamsService {
  private readonly filePath = 'data/teams.json';

  getAllTeams() {
    return fs.readJSONSync(this.filePath);
  }

  getTeamById(id: number) {
    const teams = this.getAllTeams();
    const team = teams.find(team => team.id === +id); 
    return team;
  }
  
  

  addTeam(newTeam) {
    const teams = this.getAllTeams();
    teams.push(newTeam);
    fs.writeJSONSync(this.filePath, teams);
  }
}


