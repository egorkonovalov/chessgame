import { File, Rank } from "./sets";
import { DistanceFrom } from "./traits/distanceFrom"

export class Position implements DistanceFrom {
  constructor(private file: File, private rank: Rank) { }
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}
